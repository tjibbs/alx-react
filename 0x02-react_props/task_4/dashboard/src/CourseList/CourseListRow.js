import React from 'react';

const CourseListRow = ({
  isHeader,
  textFirstCell,
  textSecondCell,
}) => {
  const tdClass = isHeader ? 'th' : 'td';
  const tdColspan = isHeader && textSecondCell === null ? 2 : 1;

  return (
    <tr>
      <td className={tdClass} colSpan={tdColspan}>
        {textFirstCell}
      </td>
      {textSecondCell && (
        <td className={tdClass}>
          {textSecondCell}
        </td>
      )}
    </tr>
  );
};

export default CourseListRow;