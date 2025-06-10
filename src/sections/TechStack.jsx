import TitleHeader from '../components/TitleHeader';
import { techStackIcons } from '../constants';


const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
        <div className='w-full h-full md:px-10 px px-5'>
            <TitleHeader
                title="My Preferred Tech Stack"
                sub="🤝 The Skills I Bring to the Table"
            />

            <div className='tech-grid'>
                {techStackIcons.map((icon) => (
                    <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
                        <div className='tech-card-animated-bg' />
                        <div className='tech-card-content'>
                            <div className='tech-icon-wrapper'>
                                <TechIcon model={icon} />
                            </div>

                            <div className='padding-x w-full'>
                                {icon.name}
                            </div>
                        </div>
                        {icon.name}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TechStack