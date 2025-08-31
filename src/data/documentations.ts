export const gameGuide = {
  tools: [
    {
      id: "xray",
      name: "Pemindai X-Ray",
      icon: "🩻",
      usage: "Memindai tulang untuk mendeteksi patah tulang atau keretakan.",
      example: "Tulang rusuk retak → indikasi benturan keras atau luka tembak."
    },
    {
      id: "bloodtest",
      name: "Alat Tes Darah",
      icon: "🧪",
      usage: "Menganalisis kandungan darah korban.",
      example: "Terdapat sianida → indikasi keracunan."
    },
    {
      id: "uvlight",
      name: "Lampu UV",
      icon: "🔦",
      usage: "Menemukan luka tersembunyi atau bekas cekikan.",
      example: "Lebam di leher → indikasi strangulasi (cekikan)."
    },
    {
      id: "autopsy",
      name: "Laporan Autopsi",
      icon: "⚰️",
      usage: "Pemeriksaan organ dalam korban.",
      example: "Paru-paru penuh air → indikasi tenggelam."
    },
    {
      id: "fingerprint",
      name: "Serbuk Sidik Jari",
      icon: "🖐️",
      usage: "Mencari sidik jari asing pada barang bukti.",
      example: "Sidik jari di gagang pisau → bukti keberadaan pelaku."
    },
    {
      id: "toxicology",
      name: "Laporan Toksikologi",
      icon: "💉",
      usage: "Mendeteksi zat berbahaya dalam tubuh korban.",
      example: "Arsenik terdeteksi → keracunan makanan/minuman."
    },
    {
      id: "dna",
      name: "Kit Analisis DNA",
      icon: "🧬",
      usage: "Membandingkan DNA pada barang bukti dengan korban.",
      example: "DNA pelaku di pisau → bukti pembunuhan."
    }
  ],
  causes: [
    {
      id: "blunt-force",
      label: "Kekerasan fisik dengan benda tumpul",
      hint: "Biasanya ditandai tulang retak atau pendarahan organ dalam."
    },
    {
      id: "strangulation",
      label: "Sesak napas akibat cekikan",
      hint: "Ada memar di leher dan tanda asfiksia."
    },
    {
      id: "cyanide-poisoning",
      label: "Keracunan sianida",
      hint: "Kadar sianida tinggi di darah dan kerusakan organ dalam."
    },
    {
      id: "drowning",
      label: "Tenggelam",
      hint: "Paru-paru penuh air dan busa keluar dari mulut korban."
    },
    {
      id: "stab-wound",
      label: "Luka tusuk",
      hint: "Ada luka tembus organ vital atau pisau menancap."
    },
    {
      id: "gunshot",
      label: "Luka tembak",
      hint: "Peluru bersarang di tubuh, autopsi tunjukkan kerusakan paru-paru/organ vital."
    },
    {
      id: "electrocution",
      label: "Sengatan listrik",
      hint: "Ada luka bakar di tangan dan kerusakan jaringan akibat aliran listrik."
    },
    {
      id: "poisoning",
      label: "Keracunan makanan/minuman",
      hint: "Zat berbahaya (seperti arsenik) ditemukan dalam darah/organ."
    },
    {
      id: "burn",
      label: "Luka bakar",
      hint: "Tubuh korban mengalami luka bakar parah."
    },
    {
      id: "fall",
      label: "Jatuh dari ketinggian",
      hint: "Ditandai dengan patah tulang leher/tengkorak akibat benturan."
    },
    {
      id: "suffocation",
      label: "Kekurangan oksigen (asfiksia)",
      hint: "Biasanya karena asap kebakaran atau karbon monoksida."
    },
    {
      id: "decapitation",
      label: "Pemenggalan kepala",
      hint: "Kepala korban terpisah, tulang leher terputus total."
    }
  ]
};
