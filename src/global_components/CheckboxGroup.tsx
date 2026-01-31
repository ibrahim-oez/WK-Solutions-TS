import React, { useState, useEffect, ReactNode } from "react";

interface Checkbox {
  id: string;
  label: ReactNode;
  required?: boolean;
}

interface CheckboxGroupProps {
  checkboxes: Checkbox[];
  onAllChecked: (allChecked: boolean) => void;
  className?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  checkboxes,
  onAllChecked,
  className = ""
}) => {
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>(
    checkboxes.reduce((acc, checkbox) => {
      acc[checkbox.id] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setCheckedState(prev => ({
      ...prev,
      [id]: checked
    }));
  };

  useEffect(() => {
    const requiredCheckboxes = checkboxes.filter(cb => cb.required);
    const allRequiredChecked = requiredCheckboxes.every(cb => checkedState[cb.id]);
    onAllChecked(allRequiredChecked);
  }, [checkedState, checkboxes, onAllChecked]);

  return (
    <div className={className}>
      {checkboxes.map((checkbox) => (
        <div
          key={checkbox.id}
          className="flex items-start mb-4"
        >
          <label className="flex items-start text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              checked={checkedState[checkbox.id]}
              onChange={(e) => handleCheckboxChange(checkbox.id, e.target.checked)}
              className="mt-1 mr-2"
            />
            <span>
              {checkbox.required && "*"}
              {checkbox.label}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};