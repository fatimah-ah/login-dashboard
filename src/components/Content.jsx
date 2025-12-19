function Content() {
const data = [

{ id: 1, title: "Card One", desc: "This is dummy data" },
{ id: 2, title: "Card Two", desc: "This is dummy data" },
{ id: 3, title: "Card Three", desc: "This is dummy data" },

];

return (

<div style={{ padding: "20px", display: "flex", gap: "20px" }}>

{data.map(item => (
<div
key={item.id}
style={{
background: "#fff",
padding: "20px",
borderRadius: "8px",
width: "200px",
}}
>

<h3>{item.title}</h3>
<p>{item.desc}</p>
</div>
))}
</div>

);
}

export default Content;
