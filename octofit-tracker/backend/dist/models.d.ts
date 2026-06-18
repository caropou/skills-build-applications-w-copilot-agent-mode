import { Schema } from 'mongoose';
export declare const User: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    username: string;
    email: string;
    password: string;
    teams: import("mongoose").Types.ObjectId[];
    createdAt: Date;
    profile?: {
        firstName?: string | undefined;
        lastName?: string | undefined;
        avatar?: string | undefined;
        bio?: string | undefined;
    } | undefined;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    username: string;
    email: string;
    password: string;
    teams: import("mongoose").Types.ObjectId[];
    createdAt: Date;
    profile?: {
        firstName?: string | undefined;
        lastName?: string | undefined;
        avatar?: string | undefined;
        bio?: string | undefined;
    } | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    username: string;
    email: string;
    password: string;
    teams: import("mongoose").Types.ObjectId[];
    createdAt: Date;
    profile?: {
        firstName?: string | undefined;
        lastName?: string | undefined;
        avatar?: string | undefined;
        bio?: string | undefined;
    } | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    username: string;
    email: string;
    password: string;
    teams: import("mongoose").Types.ObjectId[];
    createdAt: Date;
    profile?: {
        firstName?: string | undefined;
        lastName?: string | undefined;
        avatar?: string | undefined;
        bio?: string | undefined;
    } | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    username: string;
    email: string;
    password: string;
    teams: import("mongoose").Types.ObjectId[];
    createdAt: Date;
    profile?: {
        firstName?: string | undefined;
        lastName?: string | undefined;
        avatar?: string | undefined;
        bio?: string | undefined;
    } | undefined;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    username: string;
    email: string;
    password: string;
    teams: import("mongoose").Types.ObjectId[];
    createdAt: Date;
    profile?: {
        firstName?: string | undefined;
        lastName?: string | undefined;
        avatar?: string | undefined;
        bio?: string | undefined;
    } | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
export declare const Team: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    name: string;
    members: import("mongoose").Types.ObjectId[];
    owner: import("mongoose").Types.ObjectId;
    description?: string | undefined;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    name: string;
    members: import("mongoose").Types.ObjectId[];
    owner: import("mongoose").Types.ObjectId;
    description?: string | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    name: string;
    members: import("mongoose").Types.ObjectId[];
    owner: import("mongoose").Types.ObjectId;
    description?: string | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    name: string;
    members: import("mongoose").Types.ObjectId[];
    owner: import("mongoose").Types.ObjectId;
    description?: string | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    name: string;
    members: import("mongoose").Types.ObjectId[];
    owner: import("mongoose").Types.ObjectId;
    description?: string | undefined;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    name: string;
    members: import("mongoose").Types.ObjectId[];
    owner: import("mongoose").Types.ObjectId;
    description?: string | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
export declare const Activity: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    date: Date;
    type: "running" | "cycling" | "swimming" | "gym" | "other";
    createdAt: Date;
    user: import("mongoose").Types.ObjectId;
    duration: number;
    intensity: "low" | "moderate" | "high";
    distance?: number | undefined;
    calories?: number | undefined;
    notes?: string | undefined;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    date: Date;
    type: "running" | "cycling" | "swimming" | "gym" | "other";
    createdAt: Date;
    user: import("mongoose").Types.ObjectId;
    duration: number;
    intensity: "low" | "moderate" | "high";
    distance?: number | undefined;
    calories?: number | undefined;
    notes?: string | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    date: Date;
    type: "running" | "cycling" | "swimming" | "gym" | "other";
    createdAt: Date;
    user: import("mongoose").Types.ObjectId;
    duration: number;
    intensity: "low" | "moderate" | "high";
    distance?: number | undefined;
    calories?: number | undefined;
    notes?: string | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    date: Date;
    type: "running" | "cycling" | "swimming" | "gym" | "other";
    createdAt: Date;
    user: import("mongoose").Types.ObjectId;
    duration: number;
    intensity: "low" | "moderate" | "high";
    distance?: number | undefined;
    calories?: number | undefined;
    notes?: string | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    date: Date;
    type: "running" | "cycling" | "swimming" | "gym" | "other";
    createdAt: Date;
    user: import("mongoose").Types.ObjectId;
    duration: number;
    intensity: "low" | "moderate" | "high";
    distance?: number | undefined;
    calories?: number | undefined;
    notes?: string | undefined;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    date: Date;
    type: "running" | "cycling" | "swimming" | "gym" | "other";
    createdAt: Date;
    user: import("mongoose").Types.ObjectId;
    duration: number;
    intensity: "low" | "moderate" | "high";
    distance?: number | undefined;
    calories?: number | undefined;
    notes?: string | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
export declare const Workout: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    user: import("mongoose").Types.ObjectId;
    title: string;
    exercises: {
        name?: string | undefined;
        sets?: number | undefined;
        reps?: number | undefined;
        weight?: number | undefined;
    }[];
    difficulty: "beginner" | "intermediate" | "advanced";
    tags: string[];
    description?: string | undefined;
    duration?: number | undefined;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    user: import("mongoose").Types.ObjectId;
    title: string;
    exercises: {
        name?: string | undefined;
        sets?: number | undefined;
        reps?: number | undefined;
        weight?: number | undefined;
    }[];
    difficulty: "beginner" | "intermediate" | "advanced";
    tags: string[];
    description?: string | undefined;
    duration?: number | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    user: import("mongoose").Types.ObjectId;
    title: string;
    exercises: {
        name?: string | undefined;
        sets?: number | undefined;
        reps?: number | undefined;
        weight?: number | undefined;
    }[];
    difficulty: "beginner" | "intermediate" | "advanced";
    tags: string[];
    description?: string | undefined;
    duration?: number | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    user: import("mongoose").Types.ObjectId;
    title: string;
    exercises: {
        name?: string | undefined;
        sets?: number | undefined;
        reps?: number | undefined;
        weight?: number | undefined;
    }[];
    difficulty: "beginner" | "intermediate" | "advanced";
    tags: string[];
    description?: string | undefined;
    duration?: number | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    user: import("mongoose").Types.ObjectId;
    title: string;
    exercises: {
        name?: string | undefined;
        sets?: number | undefined;
        reps?: number | undefined;
        weight?: number | undefined;
    }[];
    difficulty: "beginner" | "intermediate" | "advanced";
    tags: string[];
    description?: string | undefined;
    duration?: number | undefined;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    user: import("mongoose").Types.ObjectId;
    title: string;
    exercises: {
        name?: string | undefined;
        sets?: number | undefined;
        reps?: number | undefined;
        weight?: number | undefined;
    }[];
    difficulty: "beginner" | "intermediate" | "advanced";
    tags: string[];
    description?: string | undefined;
    duration?: number | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
export declare const Leaderboard: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    updatedAt: Date;
    user: import("mongoose").Types.ObjectId;
    totalActivities: number;
    totalDistance: number;
    totalCalories: number;
    totalDuration: number;
    points: number;
    rank?: number | undefined;
    team?: import("mongoose").Types.ObjectId | undefined;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    updatedAt: Date;
    user: import("mongoose").Types.ObjectId;
    totalActivities: number;
    totalDistance: number;
    totalCalories: number;
    totalDuration: number;
    points: number;
    rank?: number | undefined;
    team?: import("mongoose").Types.ObjectId | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    updatedAt: Date;
    user: import("mongoose").Types.ObjectId;
    totalActivities: number;
    totalDistance: number;
    totalCalories: number;
    totalDuration: number;
    points: number;
    rank?: number | undefined;
    team?: import("mongoose").Types.ObjectId | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    updatedAt: Date;
    user: import("mongoose").Types.ObjectId;
    totalActivities: number;
    totalDistance: number;
    totalCalories: number;
    totalDuration: number;
    points: number;
    rank?: number | undefined;
    team?: import("mongoose").Types.ObjectId | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    updatedAt: Date;
    user: import("mongoose").Types.ObjectId;
    totalActivities: number;
    totalDistance: number;
    totalCalories: number;
    totalDuration: number;
    points: number;
    rank?: number | undefined;
    team?: import("mongoose").Types.ObjectId | undefined;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    updatedAt: Date;
    user: import("mongoose").Types.ObjectId;
    totalActivities: number;
    totalDistance: number;
    totalCalories: number;
    totalDuration: number;
    points: number;
    rank?: number | undefined;
    team?: import("mongoose").Types.ObjectId | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
//# sourceMappingURL=models.d.ts.map