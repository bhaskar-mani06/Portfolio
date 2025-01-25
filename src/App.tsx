import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal, Code2, Database, Brain, Server, Globe, Book, Award, Users } from 'lucide-react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-slate-900/50"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000">
            <h1 className="text-6xl font-bold mb-6">Bhaskar Mani</h1>
            <h2 className="text-4xl text-blue-400 font-semibold mb-6">Python Developer</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">Passionate about creating efficient, scalable solutions and turning complex problems into elegant code. Specializing in Python development with a focus on web applications and data analysis.</p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
                Contact Me
              </a>
              <a href="#projects" className="border border-white/20 hover:border-white/40 px-6 py-3 rounded-lg transition-colors">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=800" 
                  alt="Profile" 
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000">
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-gray-300 mb-6">
                  Hello! I'm Bhaskar, a Python developer with a passion for creating efficient and scalable solutions. Fresh out of my Computer Science degree, I bring a strong foundation in programming principles and a eagerness to learn and grow in the tech industry.
                </p>
                <p className="text-gray-300 mb-6">
                  During my academic journey, I've worked on various projects that have helped me develop strong problem-solving skills and a deep understanding of software development principles. I'm particularly interested in web development, data analysis, and machine learning.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <Book className="w-6 h-6 text-blue-400 mb-2" />
                    <h3 className="font-semibold mb-1">Education</h3>
                    <p className="text-gray-400 text-sm">JNU in Computer Science</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <Award className="w-6 h-6 text-blue-400 mb-2" />
                    <h3 className="font-semibold mb-1">Certifications</h3>
                    <p className="text-gray-400 text-sm">AWS Certified Cloud Practitioner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-800" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Technical Skills</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            My technical toolkit is constantly growing. Here are some of the key technologies and skills I've mastered along my journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Terminal className="w-8 h-8" />, 
                title: 'Python Development', 
                desc: 'Django, Flask, FastAPI, REST APIs, Python scripting, Test-driven development' 
              },
              { 
                icon: <Code2 className="w-8 h-8" />, 
                title: 'Web Development', 
                desc: 'HTML5, CSS3, JavaScript, React basics, Responsive design, Bootstrap' 
              },
              { 
                icon: <Database className="w-8 h-8" />, 
                title: 'Databases', 
                desc: 'PostgreSQL, MySQL, MongoDB, Database design, SQL optimization' 
              },
              { 
                icon: <Brain className="w-8 h-8" />, 
                title: 'Data Science', 
                desc: 'NumPy, Pandas, Matplotlib, Basic machine learning with Scikit-learn' 
              },
              { 
                icon: <Server className="w-8 h-8" />, 
                title: 'DevOps', 
                desc: 'Git, Docker basics, CI/CD pipelines, AWS fundamentals' 
              },
              { 
                icon: <Globe className="w-8 h-8" />, 
                title: 'API Development', 
                desc: 'RESTful APIs, API documentation, Postman, API testing' 
              },
              { 
                icon: <Users className="w-8 h-8" />, 
                title: 'Soft Skills', 
                desc: 'Team collaboration, Problem-solving, Communication, Time management' 
              },
              { 
                icon: <Brain className="w-8 h-8" />, 
                title: 'Learning', 
                desc: 'Quick learner, Adaptable, Passionate about new technologies' 
              }
            ].map((skill, index) => (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000 bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition-colors"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-blue-400 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Featured Projects</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development. Each project represents a unique challenge and learning opportunity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Data Analysis Dashboard',
                desc: 'Interactive dashboard built with Python and Streamlit for data visualization. Features real-time data updates, interactive charts, and customizable views.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
                tags: ['Python', 'Streamlit', 'Pandas']
              },
              {
                title: 'Task Management API',
                desc: 'RESTful API built with FastAPI and PostgreSQL. Includes user authentication, task CRUD operations, and detailed API documentation.',
                image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800',
                tags: ['FastAPI', 'PostgreSQL', 'Docker']
              },
              {
                title: 'ML Price Predictor',
                desc: 'Machine learning model for real estate price prediction. Uses historical data and various features to predict property prices with high accuracy.',
                image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=800',
                tags: ['Python', 'Scikit-learn', 'Pandas']
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-xl bg-slate-800">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-gray-300 mb-8">
              I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://github.com/bhaskar-mani06" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/bhaskarmani06" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:bhaskardubey06@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-8 h-8" />
              </a>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-500 focus:outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-500 focus:outline-none"
              />
              <textarea 
                placeholder="Your message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-500 focus:outline-none"
              ></textarea>
              <button className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 bhaskar mani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;