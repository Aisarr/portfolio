
import PropTypes from 'prop-types';

function ProjectCard({ title, description, link}) {
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer" className='text-2xl text-white hover:text-gray-300'>
      {title}
      </a>
      <p className='text-blue-300'>{description}</p>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
