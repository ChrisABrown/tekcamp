import moment from 'moment'

export default function Logo() {
  let today = moment().utcOffset('+6:00').format('MM/DD/YYYY hh:mm a')

  return (
    <div className='suprime-red-box'>
      <h2 className='suprime-logo-font'>Suprime</h2>
      <p className='suprime-text-font'>{today}</p>
    </div>
  )
}
