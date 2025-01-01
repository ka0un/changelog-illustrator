import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import ChangelogSection from './ChangelogSection';
import { useNavigate } from 'react-router-dom';

const ChangelogDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold">Changelog Details</h1>
            <p className="text-gray-600 mt-2">2024/02/20 10:00</p>
          </div>
          <div className="text-right mt-4 md:mt-0">
            <p className="text-gray-600 mb-1">Modified by: Taro Yamada</p>
            <p className="text-gray-600">Shop name: Car Shop A</p>
          </div>
        </div>

        <ScrollArea className="h-[60vh] w-full rounded-md border p-4">
          <div className="space-y-8">
            <ChangelogSection
              title="area"
              beforeChange="Kanagawa, Shizuoka"
              addedItems="Tokyo, Chiba, Saitama"
              removedItems="Kanagawa, Shizuoka"
            />
            <ChangelogSection
              title="maker"
              beforeChange="Subaru"
              alternativeChoices="Toyota, Honda, Nissan"
              addedItems="Toyota, Honda, Nissan"
              removedItems="Subaru"
            />
            <ChangelogSection
              title="Models"
              beforeChange="Vitz, Fit"
              alternativeChoices="Prius, Aqua"
              addedItems="Prius, Aqua"
              removedItems="Vitz, Fit"
            />
            <ChangelogSection
              title="Body"
              beforeChange="Mini"
              alternativeChoices="Sedans, SUVs"
              addedItems="Sedans, SUVs"
              removedItems="Mini"
            />
          </div>
        </ScrollArea>

        <div className="mt-6">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
          >
            Back to list
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChangelogDetails;