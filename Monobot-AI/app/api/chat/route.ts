import { monojitData } from '@/lib/monojit-data';
import { NextRequest, NextResponse } from 'next/server';

interface QueryResponse {
  answer: string;
  found: boolean;
}

export async function POST(request: NextRequest): Promise<NextResponse<QueryResponse>> {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        {
          answer: 'Please ask a valid question.',
          found: false
        },
        { status: 400 }
      );
    }

    const query = message.toLowerCase().trim();
    const response = findAnswer(query);

    return NextResponse.json(response);
  } catch {
    return NextResponse.json(
      {
        answer: 'Sorry, I encountered an error processing your question.',
        found: false
      },
      { status: 500 }
    );
  }
}

function findAnswer(query: string): QueryResponse {
  // Name queries
  if (
    query.includes('name') ||
    query.includes('who are you') ||
    query.includes('introduce yourself') ||
    query.includes('what is your name')
  ) {
    return {
      answer: `Hi! I'm ${monojitData.name}, a passionate full-stack developer. ${monojitData.summary}`,
      found: true
    };
  }

  // Contact queries
  if (query.includes('email') || query.includes('contact')) {
    return {
      answer: `You can reach me at ${monojitData.email}`,
      found: true
    };
  }

  if (query.includes('phone')) {
    return {
      answer: `My phone number is ${monojitData.phone}`,
      found: true
    };
  }

  if (query.includes('location') || query.includes('where are you')) {
    return {
      answer: `I'm based in ${monojitData.location}`,
      found: true
    };
  }

  // Age and DOB queries
  if (query.includes('age') || query.includes('old')) {
    return {
      answer: `I'm ${monojitData.age} years old, born on ${monojitData.dob}`,
      found: true
    };
  }

  if (query.includes('birth') || query.includes('dob')) {
    return {
      answer: `My date of birth is ${monojitData.dob}`,
      found: true
    };
  }

  // Education queries
  if (query.includes('education') || query.includes('studied') || query.includes('degree')) {
    const educationText = monojitData.education
      .map(
        (edu) => `${edu.degree} from ${edu.institution} (${edu.year}) - ${edu.details}`
      )
      .join('\n• ');
    return {
      answer: `My education:\n• ${educationText}`,
      found: true
    };
  }

  // Skills queries
  if (query.includes('skills') || query.includes('languages') || query.includes('know')) {
    return {
      answer: `My skills include:\n
• Languages: ${monojitData.skills.languages.join(', ')}\n
• Frontend: ${monojitData.skills.frontend.join(', ')}\n
• Backend: ${monojitData.skills.backend.join(', ')}\n
• Tools: ${monojitData.skills.tools.join(', ')}`,
      found: true
    };
  }

  if (query.includes('language') && query.includes('speak')) {
    return {
      answer: `I speak: ${monojitData.languages.join(', ')}`,
      found: true
    };
  }

  // Experience queries
  if (query.includes('experience') || query.includes('work') || query.includes('job')) {
    const experienceText = monojitData.experience
      .map(
        (exp) => `${exp.role} at ${exp.company} (${exp.duration}) - ${exp.description}`
      )
      .join('\n• ');
    return {
      answer: `My professional experience:\n• ${experienceText}`,
      found: true
    };
  }

  // Projects queries
  if (query.includes('project') || query.includes('built')) {
    const projectsText = monojitData.projects
      .map(
        (proj) =>
          `${proj.name} (${proj.year}) - ${proj.description} \n  Tech: ${proj.technologies.join(', ')}`
      )
      .join('\n• ');
    return {
      answer: `My notable projects:\n• ${projectsText}`,
      found: true
    };
  }

  // Certifications queries
  if (query.includes('certification') || query.includes('certified')) {
    const certText = monojitData.certifications
      .map((cert) => `${cert.name} (${cert.year})`)
      .join('\n• ');
    return {
      answer: `My certifications:\n• ${certText}`,
      found: true
    };
  }

  // Hobbies queries
  if (query.includes('hobby') || query.includes('hobbies') || query.includes('interest')) {
    return {
      answer: `My hobbies and interests: ${monojitData.hobbies.join(', ')}`,
      found: true
    };
  }

  // Career objective queries
  if (query.includes('career') || query.includes('objective') || query.includes('goal')) {
    return {
      answer: `My career objective: ${monojitData.careerObjective}`,
      found: true
    };
  }

  // Social media queries
  if (query.includes('social') || query.includes('linkedin') || query.includes('github')) {
    return {
      answer: `You can find me on:\n• LinkedIn: ${monojitData.socialMedia.linkedin}\n• GitHub: ${monojitData.socialMedia.github}\n• Twitter: ${monojitData.socialMedia.twitter}\n• Portfolio: ${monojitData.socialMedia.portfolio}`,
      found: true
    };
  }

  // Default response for unrelated questions
  return {
    answer: "Sorry, I can only answer questions related to my personal information. Feel free to ask me about my background, skills, experience, projects, or anything else about me!",
    found: false
  };
}
