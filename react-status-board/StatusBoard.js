
import { TicketInfo } from './TicketInfo'
import completedImage from '../Images/completedImage.jpg'
import inprogress from '..//Images/inprogress.jpg'
import failedImage from '../Images/failedImage.jpg'

export const StatusBoard = () => {
  
  return (
     <div>
      <h1 className='heading'>Ticket Dashboard</h1>
     <div className="status-board">
      <TicketInfo result="completed" image={completedImage} count={5}>
        Tickets Completed
      </TicketInfo>
      
      <TicketInfo result="in-progress" image={inprogress} count={8}>
        Tickets In Progress
      </TicketInfo>
      
      <TicketInfo result="failed" image={failedImage} count={2}>
        Tickets Failed
      </TicketInfo>
    </div>
    </div>
  )
}
