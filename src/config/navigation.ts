interface Navigate {
    title: string,
    link: string,
}

interface INavigations {
    title: string,
    link: string,
    icon: any,
    childer: Navigate[]
}

export const navigation: INavigations[] = [
    {
        title: "Culter check",
        link: "/auth/login",
        icon: 'aa',
        childer: [
            {
                title: "Survey",
                link: "qqqqqqqqqqq",

            },
            {
                title: "Strategy",
                link: "qqqqqqqqqqq",
            }
        ]
    }
]