import Cat from './Cat.jsx';

const initialCats = [
    {
        name: 'Sleepy',
        imgUrl: 'https://kagi.com/proxy/images?c=_m3km2RjA3G0qleowsZXHZb9NEn0fSsEYIHbKzMDyAFb4nUPIanknmQV_g0rmdCI37OTaWa4wwGvfdAuCOmBef_A34oaUi49PlinXS2uK0Pt_2T2qMuiO5TipvcNLPtoSbHx3zZdWfq5Xk4jTNLoJFYKhReaaSIX8Q-OkdLSgHI%3D',
    },
    {
        name: 'Hopper',
        imgUrl: 'https://kagi.com/proxy/images?c=_m3km2RjA3G0qleowsZXHZb9NEn0fSsEYIHbKzMDyAFb4nUPIanknmQV_g0rmdCIG61qagBWn0eCpVrIZ2jMXmC9HvZRNggr8ebCZXTRQid0NEH74RFWjt82DjQsI_PkYM-L3sae0uLGMZEQrq9Hv0br2xoTbdyc0n8EpuIUbrY%3D',
    },
    {
        name: 'Tay',
        imgUrl: 'https://kagi.com/proxy/images?c=_m3km2RjA3G0qleowsZXHZb9NEn0fSsEYIHbKzMDyAFb4nUPIanknmQV_g0rmdCI_5YZirnciaKmv6nPEGz5GLEHWX5UxNVSBVe21sqC1HKIwQYb6g8dsM9d48fVEFaLVtlTWi7OfTHfkZ9imFe06JuoogNiS4aNc7SjZx3PrCk%3D',
    },
];

function App() {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h1>My Cat Collection</h1>
            {
                initialCats.map((catObject) => {
                    return (
                        <Cat
                            key={catObject.name}
                            imgUrl={catObject.imgUrl}
                            name={catObject.name}
                        />
                    );
                })
            }
        </div>
    );
}

export default App;
