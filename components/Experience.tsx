import React from 'react';

  interface TimelineItem {
    startMonth: string;
    startYear: number;
    endMonth: string | null; // It could be null if the experience is ongoing
    endYear: number | null; // It could be null if the experience is ongoing
    title: string;
    company: string;
    tasks: string[];
    technologies: string[];
  }
  
  const Experience: React.FC = () => {
    const timelineData: { data: TimelineItem[] } = {
      data: [
        {
          startMonth: 'Feb',
          startYear: 2024,
          endMonth: 'Present',
          endYear: null,
          title: 'Software Developer',
          company: 'Corgis.ai',
          tasks: [
            'Troubleshooting, debugging, maintaining, and improving existing software.',
            'Observing user feedback to recommend improvements to existing software products.',
            'Developing technical documentation to guide future software development projects',
          ],
          technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
        },
        {
          startMonth: 'Jun',
          startYear: 2023,
          endMonth: 'Dec',
          endYear: 2023,
          title: 'Web Developer',
          company: 'Another Company Ltd.',
          tasks: [
            'Troubleshooting, debugging, maintaining, and improving existing software.',
            'Observing user feedback to recommend improvements to existing software products.',
          ],
          technologies: ['HTML', 'CSS', 'JavaScript', 'Python'],
        },
        // Add more items as needed
      ],
    };
  
    const formatDateRange = (startMonth: string, startYear: number, endMonth: string | null, endYear: number | null): string => {
      if (endMonth && endYear) {
        return `${startMonth}. ${startYear} - ${endMonth}. ${endYear}`;
      } else {
        return `${startMonth}. ${startYear} - Present`;
      }
    };
  
    return (
      <div className="py-20 w-full">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading mb-12">
            My <span className="text-purple">work experience</span>
          </h1>
          <div className="flex flex-col gap-8">
            {timelineData.data.map((item, index) => (
              <div key={`timeline-item-${index}`} className="flex items-center">
                <div className="flex justify-center items-center text-white rounded-full w-24 h-24 bg-slate-600">
                  <div className="flex h-20 w-20 bg-slate-800 font-bold rounded-full justify-center items-center text-center text-xs text-purple">
                    {formatDateRange(item.startMonth, item.startYear, item.endMonth, item.endYear)}
                  </div>
                </div>
                <div className="ml-6">
                  <div className="font-bold">
                    {item.title} @ <span className="text-purple font-bold text-base">{item.company}</span>
                  </div>
                  <ul className="mt-2 list-disc pl-5">
                    {item.tasks.map((task, taskIndex) => (
                      <li key={`task-${taskIndex}`}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;