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
              title="Email"
              beforeChange="john@example.com"
              addedItems="kasun@gmail.com"
              removedItems="john@example.com"
            />
            <ChangelogSection
              title="Area"
              beforeChange="Tokyo: Shibuya-ku"
              addedItems="Hokkaido: Chuo-ku, Sapporo"
              removedItems="Tokyo: Shibuya-ku"
            />
            <ChangelogSection
              title="General OK Maker"
              beforeChange="Toyota, Honda"
              addedItems="Subaru, Mazda, Nissan"
              removedItems="Toyota, Honda"
              type="ok"
            />
            <ChangelogSection
              title="General OK Body"
              beforeChange="Sedan"
              addedItems="Mini, SUV, Compact"
              removedItems="Sedan"
              type="ok"
            />
            <ChangelogSection
              title="General OK Models"
              beforeChange="Corolla: Toyota"
              addedItems="Prius: Toyota, Fit: Honda, Leaf: Nissan"
              removedItems="Corolla: Toyota"
              type="ok"
            />
            <ChangelogSection
              title="General NG Maker"
              beforeChange="Mitsubishi"
              addedItems="Subaru, Isuzu"
              removedItems="Mitsubishi"
              type="ng"
            />
            <ChangelogSection
              title="General NG Body"
              beforeChange="Van"
              addedItems="Mini, Truck"
              removedItems="Van"
              type="ng"
            />
            <ChangelogSection
              title="General NG Models"
              beforeChange="March: Nissan"
              addedItems="Prius: Toyota, Civic: Honda"
              removedItems="March: Nissan"
              type="ng"
            />
            <ChangelogSection
              title="Special OK Maker"
              beforeChange="Lexus"
              addedItems="Subaru, Toyota Premium"
              removedItems="Lexus"
              type="ok"
            />
            <ChangelogSection
              title="Special OK Body"
              beforeChange="Coupe"
              addedItems="Mini, Sports"
              removedItems="Coupe"
              type="ok"
            />
            <ChangelogSection
              title="Special OK Models"
              beforeChange="Crown: Toyota"
              addedItems="Prius: Toyota, WRX: Subaru"
              removedItems="Crown: Toyota"
              type="ok"
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