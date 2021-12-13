export interface Profile {
  id: number;
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  headline: string;
  linkedinUrl: string;
  type: string;
  name: string;
  attributes: string;
  authorities: [
    {
      authority: string,
    }
  ];
}

export interface SavedProgram extends UnsavedProgram {
  id: number;
  state: string;
  imageUrl: string;
}

export interface UnsavedProgram {
  title: string;
  headline: string;
  imageUrl: string;
  landingPageUrl: string;
}

export interface Mentor {
  id: number;
  profile: Profile;
  state: string;
  program: SavedProgram;
  application: string;
}

export interface Mentee {
  id: number;
  profile: Profile;
  state: 'PENDING' | 'APPROVED' | 'REJECTED' | 'REMOVED';
  submissionUrl: string;
  mentor: Mentor;
}
