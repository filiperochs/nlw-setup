import * as Progress from '@radix-ui/react-progress'
import clsx from 'clsx'

interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props: ProgressBarProps) {
  // props.progress is always a number between 0 and 100
  const progressCalculated = Math.min(Math.max(props.progress, 0), 100)

  const progressStyles = {
    width: `${progressCalculated}%`
  }

  return (
    <Progress.Root
      className="h-3 rounded-xl bg-zinc-700 w-full mt-4"
      value={progressCalculated}
    >
      <Progress.Indicator
        className={clsx("h-3 rounded-xl bg-violet-600 transition-all", {
          "bg-violet-900": progressCalculated < 20,
          "bg-violet-800": progressCalculated >= 20 && progressCalculated < 40,
          "bg-violet-700": progressCalculated >= 40 && progressCalculated < 60,
          "bg-violet-600": progressCalculated >= 60 && progressCalculated < 80,
          "bg-violet-500": progressCalculated >= 80,
        })}
        aria-label="Progresso de hábitos completados nesse dia"
        style={progressStyles}
      />
    </Progress.Root>
  )
}