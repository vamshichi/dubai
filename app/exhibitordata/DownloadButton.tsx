'use client'

import { useState } from 'react';
import ExcelJS from 'exceljs';

interface Exhibitor {
  id: string;
  companyname: string;
  country: string;
  contactperson: string;
  designation: string;
  email: string;
  phone: string;
  createdAt: Date;
}

interface DownloadButtonProps {
  exhibitors: Exhibitor[];
}

export default function DownloadButton({ exhibitors }: DownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateExcel = async () => {
    setIsGenerating(true);

    const startDateInput = document.querySelector('input[type="datetime-local"]:first-of-type') as HTMLInputElement;
    const endDateInput = document.querySelector('input[type="datetime-local"]:last-of-type') as HTMLInputElement;

    const startDate = startDateInput?.value ? new Date(startDateInput.value) : null;
    const endDate = endDateInput?.value ? new Date(endDateInput.value) : null;

    const filteredExhibitors = exhibitors.filter((exhibitor) => {
      const registrationDate = new Date(exhibitor.createdAt);
      if (startDate && endDate) {
        return registrationDate >= startDate && registrationDate <= endDate;
      } else if (startDate) {
        return registrationDate >= startDate;
      } else if (endDate) {
        return registrationDate <= endDate;
      }
      return true;
    });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Exhibitors');

    worksheet.columns = [
      { header: 'Company Name', key: 'companyname', width: 30 },
      { header: 'Country', key: 'country', width: 20 },
      { header: 'Contact Person', key: 'contactperson', width: 30 },
      { header: 'Designation', key: 'designation', width: 30 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Phone', key: 'phone', width: 20 },
      { header: 'Registration Date', key: 'createdAt', width: 30 },
    ];

    filteredExhibitors.forEach((exhibitor) => {
      worksheet.addRow({
        ...exhibitor,
        createdAt: new Date(exhibitor.createdAt).toLocaleString(),
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `exhibitors_${startDate?.toISOString().split('T')[0] || 'all'}_to_${endDate?.toISOString().split('T')[0] || 'all'}.xlsx`;
    link.click();
    URL.revokeObjectURL(url);

    setIsGenerating(false);
  };

  return (
    <button
      onClick={generateExcel}
      disabled={isGenerating}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {isGenerating ? 'Generating...' : 'Download Exhibitors Excel'}
    </button>
  );
}