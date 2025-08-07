import { ScrollProfile } from "./ScrollProfile";

export function FeedControl() {
   return(
        <div
          className="
            overflow-hidden
            flex
            flex-grow: 1
            max-h-full
           "
        >
          <ScrollProfile />
      </div>
    )

}