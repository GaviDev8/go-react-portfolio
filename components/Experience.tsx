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
          startMonth: 'Jan  ',
          startYear: 2022,
          endMonth: 'Feb',
          endYear: 2024,
          title: 'Executive Business Partner to CEO',
          company: 'SandboxAQ',
          tasks: [
            'Lead projects for SandboxAQ\'s launch (investment announcements, website design, and executive interviews) to ensure successful execution and alignment with organizational goals.',
            'Executive Business and Strategic Partner to the CEO and his senior leadership team, contributing to the development and execution of SandboxAQ\'s product vision and strategy',
            'Spearheaded CEO-driven strategic initiatives that include developing organizational roadmaps, managing company OKRs,leading QBRs, and overseeing project deadlines'
          ],
          technologies: ['HTML', 'CSS', 'JavaScript', 'Python'],
        },
        {
          startMonth: 'April',
          startYear: 2020,
          endMonth: 'Dec',
          endYear: 2021,
          title: 'Executive Business Partner',
          company: 'Sandbox@Alphabet, Alphabet Inc.',
          tasks: [
            'Partnered with executive teams to facilitate Sandbox\'s departure from Alphabet Inc. Led all administrative and operational aspects of this pivotal transition.',
            'Aligned project objectives and OKRs with company targets and goals across 4 product development teams',
            'Improved collaboration among 4 development teams by organizing and delivering pertinent data to directors and leads. Managed technical documentation and oversaw action items for efficient project management.'
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
                <div className="flex justify-center items-center text-white"> 
                {/* code for above div rounded-full w-24 h-24 bg-slate-600 */}
                  <div className="flex h-24 w-24 bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] font-bold rounded-full justify-center items-center text-center text-xs text-white">
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