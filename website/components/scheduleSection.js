import ScrollContainer from 'react-indiana-drag-scroll'

import {ScheduleTable} from "./scheduletable.js"
import {AddEventModal} from "./event.js"
import Markdown from './markdown.js'

export default function ScheduleSection({ events, config }) {
  return (
    <div className='w-full py-10 min-h-[10vh]' id='schedule'>
    <div className="container mx-auto max-w-8xl pb-10">
        <h1 className="text-4xl font-bold">
          Schedule
        </h1>
        <div className='mt-3'>
          <div className="mr-20 text-gray-400 float-right">
            Click &amp; Drag &rarr;
          </div>        
          {config.schedule?.description && <Markdown>{config.schedule.description}</Markdown>}
        </div>
    </div>
    <div className="sm:w-full container mx-auto max-w-8xl">
      <ScrollContainer className="scroll-container">
        <div className="flex-none min-h-full w-full">
          <div className="content">
            <ScheduleTable events={events} config={config} />
          </div>
        </div>
      </ScrollContainer>
    </div>
    <AddEventModal config={config} />
  </div>
  )
}
