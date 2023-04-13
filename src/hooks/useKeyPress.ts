export const useKeyPress = () => {
    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, callback: any) => {
        if (event.key === 'Enter') callback()
    }

    return { onKeyDown }
}