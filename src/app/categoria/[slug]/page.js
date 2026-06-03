export default async function CategoriaPage({params}) {
    const {slug} = await params
    return (
        <h1>{slug}</h1>
    )
}
// await = "espera ficar pronto antes de continuar";
// async = "permissão pra função poder usar await".