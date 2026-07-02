export default function SectionTitle({ title, description }) {
    return (
        <div className="text-(--text-color)">
            <h2 className="text-xl font-bold mb-1">{title}</h2>
            <p>{description}</p>
        </div>
    );
}
