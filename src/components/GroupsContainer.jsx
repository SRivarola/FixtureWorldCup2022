import { Group, ScrollTop } from './index'

const GroupsContainer = () => {
  return (
    <div className="bg-primary w-full p-5">
        <div className='flex flex-wrap xs:justify-evenly justify-center gap-5 xs:mx-20'>
          <Group group={'A'} />
          <Group group={'B'} />
          <Group group={'C'} />
          <Group group={'D'} />
          <Group group={'E'} />
          <Group group={'F'} />
          <Group group={'G'} />
          <Group group={'H'} />
        </div>
        <ScrollTop />
    </div>
  )
}

export default GroupsContainer