import React from 'react';

interface ChangelogSectionProps {
  title: string;
  beforeChange: string;
  addedItems: string;
  removedItems: string;
  type?: 'ok' | 'ng' | 'neutral';
}

const ChangelogSection = ({
  title,
  beforeChange,
  addedItems,
  removedItems,
  type = 'neutral'
}: ChangelogSectionProps) => {
  return (
    <div className="border-b pb-8">
      <h3 className="font-medium text-lg mb-6">{title}</h3>
      <div className="space-y-6">
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-2">Choices before the change:</p>
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-gray-700">{beforeChange}</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-2">Added Items:</p>
          <div className="bg-green-50 p-3 rounded">
            <p className="text-green-700">{addedItems}</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-2">Items removed:</p>
          <div className="bg-red-50 p-3 rounded">
            <p className="text-red-700">{removedItems}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangelogSection;