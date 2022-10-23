export type JobHuntType = {
    id: string,
    title: string,
    link: string,
    description?: string,
    status: string,
    dateApplied?: string,
    deadline?: string
}

export type UserType = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string
}
