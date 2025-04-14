import { Timestamp } from "firebase/firestore";
import EventQuestion from "./EventQuestion";

type Event = {
  Category: string;
  City: string;
  Created: Timestamp;
  Edited: Map<Timestamp, string>[];
  Title: string;
  acceptingRegistrations: boolean;
  active: true;
  assignedRoled: Map<string, string[]>;
  bannerReferences: string;
  bannerURL: string;
  category: string; // WARN: Redundent field 'category', 'Category' already exists
  createdByUID: string;
  description: string;
  edited: Timestamp;
  endDate?: string;
  endTime?: string;
  eventDateType: 0; // TODO: type EventDateType
  eventEmailAddress: string;
  eventId: string;
  eventVisibility: string; // TODO: Type EventVisibility
  eventWebsite: string;
  howToRegisterHTMLText: string;
  id: string; // WARN: Redundent field 'id', 'eventId' already exists
  impression: number;
  instagramHandle?: string;
  lastEditedBy: Map<Timestamp, string>; // WARN: Redundent field 'lastEditedBy', 'Edited' already exists
  likeCount: number;
  likedBy: string[];
  offlineLocationAddress: string;
  onOff: number; // TODO: Type EventLocationType
  onlinePlatform?: string;
  organisationName: string;
  price: string; // WARN: Type of 'price' should be number
  priceChanges: string[];
  questions: EventQuestion[];
  registeredUsers: string[];
  registrationCount: number;
  score: number;
  shareCount: number;
  startDate: string;
  startTime: string;
  termsAndConditions: "Hello Tester!";
  title: string; // WARN: Redundent field 'title', 'Title' already exists
  toDelete: boolean;
  views: number;
};

export default Event;
