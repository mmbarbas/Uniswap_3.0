import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId:'t88k1l1a',
    dataSet:'production',
    apiVersion:'v1',
    token:'skLbidnFCoUrclLu1MjsGjo5gZqxirpYSrmgCx8IaXGpJjqO9qXPEUffonDbCCDgZdKKbFnuvluYoRDBzMuV0XuI5qKqoeXVZaeOzCt9bYt3r7oNzMpfM3U87v5qllo8ckZelkvl0RKvIO1bdTPJIrQK6EMylDYClgggiW044rr1FxOUEWeT',
    useCdn: false,
})