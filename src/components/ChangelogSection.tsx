import React from 'react';

interface ChangelogSectionProps {
  title: string;
  beforeChange: string;
  alternativeChoices?: string;
  addedItems: string;
  removedItems: string;
}

const ChangelogSection = ({
  title,
  beforeChange,
  alternativeChoices,
  addedItems,
  removedItems,
}: ChangelogSectionProps) => {
  return (
    <div className="border-b pb-8">
      <h3 className="font-medium text-lg mb-6">{title}</h3>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Choices before the change:</p>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-700">{beforeChange}</p>
            </div>
          </div>
          {alternativeChoices && (
            <div>
              <p className="text-sm text-muted-foreground mb-2">Alternative choices:</p>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-700">{alternativeChoices}</p>
              </div>
            </div>
          )}
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