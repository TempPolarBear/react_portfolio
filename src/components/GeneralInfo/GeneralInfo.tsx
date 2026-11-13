import PersonalInfo from '@/components/GeneralInfo/PersonalInfo'
import Availability from '@/components/GeneralInfo/Availability'
import Contacts from '@/components/GeneralInfo/Contacts'
import SocialMedia from '@/components/GeneralInfo/SocialMedia'
import Languages from '@/components/GeneralInfo/Languages'

function GeneralInfo() {
  return (
    <div>
        <PersonalInfo />
        <Availability />
        <Contacts />
        <SocialMedia />
        <Languages />
    </div>
  )
}

export default GeneralInfo