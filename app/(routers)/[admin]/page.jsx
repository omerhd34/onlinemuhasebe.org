'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function AdminPage() {
 const [practicalInfos, setPracticalInfos] = useState([]);
 const [loading, setLoading] = useState(true);
 const [editMode, setEditMode] = useState(false);
 const [currentEdit, setCurrentEdit] = useState(null);

 const [formData, setFormData] = useState({
  title: '',
  category: '',
  description: '',
  afterDescription: '',
  hasTable: false,
  tableData: null,
  year: 2025,
 });

 useEffect(() => {
  fetchData();
 }, []);

 const fetchData = async () => {
  try {
   const response = await fetch('/api/practical-info?limit=100');
   const data = await response.json();
   setPracticalInfos(data.data);
  } catch (error) {
   toast.error('Veriler yüklenemedi');
  } finally {
   setLoading(false);
  }
 };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
   if (editMode && currentEdit) {
    // Güncelleme
    const response = await fetch(`/api/practical-info/${currentEdit}`, {
     method: 'PUT',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
    });

    if (response.ok) {
     toast.success('Başarıyla güncellendi!');
     resetForm();
     fetchData();
    }
   } else {
    // Yeni ekleme
    const response = await fetch('/api/practical-info', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
    });

    if (response.ok) {
     toast.success('Başarıyla eklendi!');
     resetForm();
     fetchData();
    }
   }
  } catch (error) {
   toast.error('İşlem başarısız');
  }
 };

 const handleEdit = (info) => {
  setEditMode(true);
  setCurrentEdit(info.id);
  setFormData({
   title: info.title,
   category: info.category,
   description: info.description,
   afterDescription: info.afterDescription || '',
   hasTable: info.hasTable,
   tableData: info.tableData,
   year: info.year,
  });
 };

 const handleDelete = async (id) => {
  if (!confirm('Bu kaydı silmek istediğinizden emin misiniz?')) return;

  try {
   const response = await fetch(`/api/practical-info/${id}`, {
    method: 'DELETE',
   });

   if (response.ok) {
    toast.success('Başarıyla silindi!');
    fetchData();
   }
  } catch (error) {
   toast.error('Silme işlemi başarısız');
  }
 };

 const resetForm = () => {
  setEditMode(false);
  setCurrentEdit(null);
  setFormData({
   title: '',
   category: '',
   description: '',
   afterDescription: '',
   hasTable: false,
   tableData: null,
   year: 2025,
  });
 };

 if (loading) {
  return <div className="container mx-auto py-12">Yükleniyor...</div>;
 }

 return (
  <div className="container mx-auto py-12 px-4">
   <h1 className="text-3xl font-bold mb-8">Pratik Bilgiler Yönetimi</h1>

   {/* Form */}
   <div className="bg-card rounded-lg shadow p-6 mb-8">
    <h2 className="text-xl font-semibold mb-4">
     {editMode ? 'Pratik Bilgi Düzenle' : 'Yeni Pratik Bilgi Ekle'}
    </h2>

    <form onSubmit={handleSubmit} className="space-y-4">
     <div>
      <Label htmlFor="title">Başlık</Label>
      <Input
       id="title"
       value={formData.title}
       onChange={(e) => setFormData({ ...formData, title: e.target.value })}
       required
      />
     </div>

     <div>
      <Label htmlFor="category">Kategori</Label>
      <Input
       id="category"
       value={formData.category}
       onChange={(e) => setFormData({ ...formData, category: e.target.value })}
       required
      />
     </div>

     <div>
      <Label htmlFor="description">Açıklama</Label>
      <Textarea
       id="description"
       value={formData.description}
       onChange={(e) => setFormData({ ...formData, description: e.target.value })}
       className="min-h-[100px]"
       required
      />
     </div>

     <div>
      <Label htmlFor="afterDescription">Ek Açıklama (opsiyonel)</Label>
      <Textarea
       id="afterDescription"
       value={formData.afterDescription}
       onChange={(e) => setFormData({ ...formData, afterDescription: e.target.value })}
       className="min-h-[100px]"
      />
     </div>

     <div>
      <Label htmlFor="year">Yıl</Label>
      <Input
       id="year"
       type="number"
       value={formData.year}
       onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
       required
      />
     </div>

     <div className="flex gap-2">
      <Button type="submit">
       {editMode ? 'Güncelle' : 'Ekle'}
      </Button>
      {editMode && (
       <Button type="button" variant="outline" onClick={resetForm}>
        İptal
       </Button>
      )}
     </div>
    </form>
   </div>

   {/* Liste */}
   <div className="bg-card rounded-lg shadow">
    <div className="p-6">
     <h2 className="text-xl font-semibold mb-4">Mevcut Pratik Bilgiler</h2>

     <div className="space-y-4">
      {practicalInfos.map((info) => (
       <div key={info.id} className="border rounded-lg p-4 flex justify-between items-start">
        <div className="flex-1">
         <h3 className="font-semibold text-lg">{info.title}</h3>
         <p className="text-sm text-muted-foreground">{info.category}</p>
         <p className="text-sm mt-2 line-clamp-2">{info.description}</p>
        </div>

        <div className="flex gap-2 ml-4">
         <Button size="sm" variant="outline" onClick={() => handleEdit(info)}>
          Düzenle
         </Button>
         <Button size="sm" variant="destructive" onClick={() => handleDelete(info.id)}>
          Sil
         </Button>
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>
  </div>
 );
}