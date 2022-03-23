async function getAdvice(): Promise<{id: string, advice: string}> {
    try {
        const res = await fetch('	https://api.adviceslip.com/advice');
        const newAdvice = (await res.json()).slip;
        return newAdvice;
    } catch (error) {
        throw new Error('Fail loading new advice')
    }
}

export default getAdvice;