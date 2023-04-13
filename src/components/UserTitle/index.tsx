import styles from './styles.module.css'

type Props = {
    title?: string
    content: string | number | undefined
    customTitleStyle?: string
}

export const UserTitle: React.FC<Props> = ({ title, content, customTitleStyle }) => {
    return (
        <>
            <p className={styles.info}>
                <span className={`${styles.title} ${customTitleStyle}`}>{title}:</span> {content}
            </p >
        </>
    )
}