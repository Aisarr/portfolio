

const Contact = () => {
  const email = 'aisarauda@gmail.com';
  const githubLink = 'https://github.com/Aisarr'
  return (
    <div className="block space-y-2">
    <a href={`mailto:${email}`} className="text-white block hover:text-gray-300">Email</a>
    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white block hover:text-gray-300">GitHub</a>
  </div>
  )
}

export default Contact