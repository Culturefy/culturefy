

interface Video {
    courseId: string,
    createdAt: Date,
    index: number,
    isDeleted: boolean,
    source: string
    updatedAt: Date,
    videoTitle: string
    _id: string
}

export interface ICourse {
    [key: any]: any,
    courseVideo: Video[]
}
