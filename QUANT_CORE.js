export function QUANT_CORE(syn){
    const energy = Math.abs(syn.pulse) + Math.abs(syn.warp) + Math.abs(syn.drift);
    const stability = syn.stable ? "hoch" : "niedrig";
    const complexity = (Math.abs(syn.angle) + energy) / 10;

    return {
        mode: "quant",
        energy,
        stability,
        complexity,
        depth: syn.etage + " / " + syn.modul,
        can: [
            "Pulse analysieren",
            "Warp interpretieren",
            "Drift bewerten",
            "Stabilität prüfen",
            "Komplexität schätzen",
            "Formtiefe bestimmen"
        ]
    };
}
