'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, X } from 'lucide-react'

const teamMembers = [
  {
    name: 'Ádám Juhász',
    role: 'CEO & Founder',
    bio: 'Adam has over 15 years of experience in tech and is passionate about making QR codes accessible to everyone.',
    image: '/assets/img/avatar1.jpg',
    social: {
      twitter: 'https://x.com/joobadam',
      linkedin: 'https://www.linkedin.com/in/adam-juhasz-021ja/',
      github: 'https://github.com/joobadam',
    },
  },
  {
    name: 'John Doe',
    role: 'CTO',
    bio: 'John is a full-stack developer with a keen interest in emerging technologies and scalable architecture.',
    image: '/assets/img/avatar2.jpg',
    social: {
        twitter: 'https://x.com/joobadam',
        linkedin: 'https://www.linkedin.com/in/adam-juhasz-021ja/',
        github: 'https://github.com/joobadam',
    },
  },
  {
    name: 'Emily Brown',
    role: 'Head of Design',
    bio: 'Emily brings creativity and user-centric design to our QR codes, making them both functional and beautiful.',
    image: '/assets/img/avatar3.jpg',
    social: {
        twitter: 'https://x.com/joobadam',
        linkedin: 'https://www.linkedin.com/in/adam-juhasz-021ja/',
        github: 'https://github.com/joobadam',
    },
  },
]

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    bio: string;
    image: string;
    social: {
      twitter: string;
      linkedin: string;
      github: string;
    };
  };
}

const TeamMember = ({ member }: TeamMemberProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={400}
          className="w-full h-64 object-contain"
        />
        <motion.div
          className="absolute inset-0 bg-yellow-500/50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-white text-center p-4">
            <p className="text-lg font-semibold mb-2">{member.bio}</p>
            <div className="flex justify-center space-x-4">
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                <X size={24} />
              </a>
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                <Linkedin size={24} />
              </a>
              <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                <Github size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-sm">{member.role}</p>
      </div>
    </motion.div>
  )
}

export default function Team() {
  return (
    <div className="min-h-screen">
      <header className="shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Our Team</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Meet the Minds Behind Our QR Innovation
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl">
            Our diverse team of experts is passionate about revolutionizing the way businesses use QR codes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
          <p className="text-xl mb-8">
            We're always looking for talented individuals to join our mission. Check out our open positions!
          </p>
          <a
            href="/careers"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-primary text-primary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            View Open Positions
          </a>
        </div>
      </main>
    </div>
  )
}