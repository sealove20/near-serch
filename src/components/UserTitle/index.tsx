import styles from './styles.module.css'

type Props = {
    title?: string
    content: string | number | undefined
    customTitleStyle?: string
    customInfoStyle?: string
}

export const UserTitle: React.FC<Props> = ({ title, content, customTitleStyle, customInfoStyle }) => {
    return (
        <>
            <p className={`${styles.info} ${customInfoStyle}`}>
                <span className={`${styles.title} ${customTitleStyle}`}>{title}:</span> {content}
            </p >
        </>
    )
}