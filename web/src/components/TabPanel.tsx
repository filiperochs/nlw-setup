import * as Tabs from '@radix-ui/react-tabs'
import clsx from 'clsx';

interface TabPanelProps {
  tabsTitle: string[];
  tabsContent: React.ReactNode[];
  tabId: string;
}

export function TabPanel({ tabsTitle, tabsContent, tabId: tabsId }: TabPanelProps) {
  return (
    <Tabs.Root
      className="flex flex-col items-center justify-center w-full"
      defaultValue="tab1"
    >
      <div
        className="w-1/2 bg-zinc-700 shadow-lg flex flex-col items-center justify-center rounded-lg"
      >
        <Tabs.List
          className="text-lg text-center flex w-full mb-8 border-b-2 border-zinc-800 pb-1/2"
          aria-label="Gerencia sua conta"
        >
          {
            tabsTitle.map((title, index) => (
              <Tabs.Trigger
                key={index}
                className={clsx("w-1/2 p-2 text-white bg-zinc-900 data-[state=active]:border-b-4 data-[state=active]:border-violet-300 data-[state=active]:bg-violet-600 transition-all", {
                  "rounded-tl-lg": index === 0,
                  "rounded-tr-lg": index === tabsTitle.length - 1,
                })}
                value={`tab${index + 1}`}
                as="button"
                id={`${tabsId}-tab${index + 1}`}
                aria-controls={`${tabsId}-panel${index + 1}`}
              >
                {title}
              </Tabs.Trigger>
            ))
          }
        </Tabs.List>

        {
          tabsContent.map((content, index) => (
            <Tabs.Content
              key={index}
              className="mb-5"
              value={`tab${index + 1}`}
              id={`${tabsId}-panel${index + 1}`}
              aria-labelledby={`${tabsId}-tab${index + 1}`}
            >
              {content}
            </Tabs.Content>
          ))
        }
      </div>
    </Tabs.Root>
  )
}