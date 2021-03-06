import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

// Object.entries(feedbackTypes)
/**
 * [
 *  ['BUG', {...}],
 *  ['IDEA', {...}],
 *  ['OTHER', {...}],
 * ]
 */

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6 font-medium">Deixe seu feedback</span>

        <CloseButton />
      </header>
      <div className="py-8 flex gap-2 w-full">
      {Object.entries(feedbackTypes).map(([key, value]) => {
        return (
          <button
            key={key}
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            className="bg-zinc-100 font-medium dark:bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            type="button"
          >
            <img src={value.image.source} alt={value.image.alt}></img>
            <span>{value.title}</span>
          </button>
        )
      })}
    </div>
    </>
)
}