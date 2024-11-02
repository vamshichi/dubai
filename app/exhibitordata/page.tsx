import { PrismaClient } from "@prisma/client";
import DateRangePicker from '@/app/exhibitordata/DateRangePicker';
import DownloadButton from '@/app/exhibitordata/DownloadButton';
import ExhibitorTable from '@/app/exhibitordata/ExhibitorTable';

const prisma = new PrismaClient();

export default async function AdminPage() {
  const exhibitors = await prisma.exhibitor.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard - All Exhibitors</h1>
      <div className="mb-4">
        <div className="pb-8">
          <DateRangePicker />
        </div>
        <DownloadButton exhibitors={exhibitors} />
      </div>
      <ExhibitorTable exhibitors={exhibitors} />
    </div>
  );
}