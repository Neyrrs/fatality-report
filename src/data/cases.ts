import type { CaseData } from "../types";

export const cases: CaseData[] = [
  {
    id: "case-001",
    title: "Korban ditemukan di ruang tamu",
    results: [
      { id: "res-001", toolId: "xray", description: "Tulang rusuk retak" },
      {
        id: "res-002",
        toolId: "bloodtest",
        description: "Tidak ada racun terdeteksi",
      },
      {
        id: "res-003",
        toolId: "uvlight",
        description: "Bekas luka lebam di leher",
      },
      {
        id: "res-004",
        toolId: "autopsy",
        description: "Pendarahan di organ dalam akibat benturan",
      },
      {
        id: "res-005",
        toolId: "fingerprint",
        description: "Tidak ada sidik jari asing",
      },
      {
        id: "res-006",
        toolId: "toxicology",
        description: "Tidak ada zat berbahaya terdeteksi",
      },
      {
        id: "res-007",
        toolId: "dna",
        description: "Tidak ditemukan DNA asing",
      }, 
    ],
    correctCauses: [
      "Kekerasan fisik dengan benda tumpul",
      "Sesak napas akibat cekikan",
    ],
  },
  {
    id: "case-002",
    title: "Jasad ditemukan di kamar mandi",
    results: [
      { id: "res-008", toolId: "xray", description: "Tidak ada patah tulang" },
      {
        id: "res-009",
        toolId: "bloodtest",
        description: "Kadar sianida tinggi",
      },
      {
        id: "res-010",
        toolId: "uvlight",
        description: "Tidak ditemukan luka tersembunyi",
      },
      {
        id: "res-011",
        toolId: "autopsy",
        description: "Kerusakan organ dalam akibat racun",
      },
      {
        id: "res-012",
        toolId: "fingerprint",
        description: "Tidak ada sidik jari asing",
      },
      {
        id: "res-013",
        toolId: "toxicology",
        description: "Sianida terdeteksi dalam tubuh",
      },
      {
        id: "res-014",
        toolId: "dna",
        description: "Tidak ditemukan DNA asing",
      },
    ],
    correctCauses: ["Keracunan sianida"],
  },
  {
    id: "case-003",
    title: "Korban ditemukan di kolam renang",
    results: [
      { id: "res-015", toolId: "xray", description: "Tidak ada patah tulang" },
      {
        id: "res-016",
        toolId: "bloodtest",
        description: "Tidak ada racun dalam darah",
      },
      {
        id: "res-017",
        toolId: "uvlight",
        description: "Busa keluar dari mulut",
      },
      {
        id: "res-018",
        toolId: "autopsy",
        description: "Paru-paru dipenuhi air",
      },
      {
        id: "res-019",
        toolId: "fingerprint",
        description: "Tidak ada sidik jari asing",
      },
      {
        id: "res-020",
        toolId: "toxicology",
        description: "Tidak ada zat berbahaya terdeteksi",
      },
      {
        id: "res-021",
        toolId: "dna",
        description: "Tidak ditemukan DNA asing",
      },
    ],
    correctCauses: ["Tenggelam"],
  },
  {
    id: "case-004",
    title: "Korban ditemukan di gudang listrik",
    results: [
      {
        id: "res-022",
        toolId: "xray",
        description: "Tidak ada keretakan tulang",
      },
      {
        id: "res-023",
        toolId: "bloodtest",
        description: "Kadar ion tubuh abnormal",
      },
      {
        id: "res-024",
        toolId: "uvlight",
        description: "Bekas luka bakar di tangan",
      },
      {
        id: "res-025",
        toolId: "autopsy",
        description: "Kerusakan jaringan akibat sengatan listrik",
      },
      {
        id: "res-026",
        toolId: "fingerprint",
        description: "Tidak ada sidik jari asing",
      },
      {
        id: "res-027",
        toolId: "toxicology",
        description: "Tidak ada zat berbahaya terdeteksi",
      },
      {
        id: "res-028",
        toolId: "dna",
        description: "Tidak ditemukan DNA asing",
      },
    ],
    correctCauses: ["Sengatan listrik"],
  },
  {
    id: "case-005",
    title: "Korban ditemukan di tangga apartemen",
    results: [
      {
        id: "res-029",
        toolId: "xray",
        description: "Patah tulang leher dan tengkorak",
      },
      {
        id: "res-030",
        toolId: "bloodtest",
        description: "Tidak ada racun terdeteksi",
      },
      {
        id: "res-031",
        toolId: "uvlight",
        description: "Tidak ada luka tersembunyi",
      },
      {
        id: "res-032",
        toolId: "autopsy",
        description: "Cedera fatal akibat jatuh dari ketinggian",
      },
      {
        id: "res-033",
        toolId: "fingerprint",
        description: "Tidak ada sidik jari asing",
      },
      {
        id: "res-034",
        toolId: "toxicology",
        description: "Tidak ada zat berbahaya terdeteksi",
      },
      {
        id: "res-035",
        toolId: "dna",
        description: "Tidak ditemukan DNA asing",
      },
    ],
    correctCauses: ["Jatuh dari ketinggian"],
  },
  {
    id: "case-006",
    title: "Korban ditemukan dengan luka di dada",
    results: [
      {
        id: "res-036",
        toolId: "xray",
        description: "Pisau menancap di tulang dada",
      },
      {
        id: "res-037",
        toolId: "bloodtest",
        description: "Tidak ada racun terdeteksi",
      },
      {
        id: "res-038",
        toolId: "uvlight",
        description: "Darah segar di pakaian",
      },
      {
        id: "res-039",
        toolId: "autopsy",
        description: "Luka tusuk menembus jantung",
      },
      {
        id: "res-040",
        toolId: "fingerprint",
        description: "Sidik jari asing ditemukan di gagang pisau",
      },
      {
        id: "res-041",
        toolId: "toxicology",
        description: "Tidak ada zat berbahaya terdeteksi",
      },
      {
        id: "res-042",
        toolId: "dna",
        description: "DNA pelaku ditemukan di gagang pisau",
      },
    ],
    correctCauses: ["Luka tusuk"],
  },
  {
    id: "case-007",
    title: "Korban ditemukan di jalan raya",
    results: [
      {
        id: "res-043",
        toolId: "xray",
        description: "Peluru bersarang di tulang rusuk",
      },
      {
        id: "res-044",
        toolId: "bloodtest",
        description: "Tidak ada racun terdeteksi",
      },
      {
        id: "res-045",
        toolId: "uvlight",
        description: "Luka bakar akibat gesekan",
      },
      {
        id: "res-046",
        toolId: "autopsy",
        description: "Luka tembak menembus paru-paru",
      },
      {
        id: "res-047",
        toolId: "fingerprint",
        description: "Sidik jari pelaku ditemukan di selongsong peluru",
      },
      {
        id: "res-048",
        toolId: "toxicology",
        description: "Tidak ada zat berbahaya terdeteksi",
      },
      {
        id: "res-049",
        toolId: "dna",
        description: "Tidak ditemukan DNA asing",
      },
    ],
    correctCauses: ["Luka tembak"],
  },
  {
    id: "case-008",
    title: "Korban ditemukan di dapur rumah",
    results: [
      {
        id: "res-050",
        toolId: "xray",
        description: "Tidak ada kerusakan tulang",
      },
      {
        id: "res-051",
        toolId: "bloodtest",
        description: "Sisa arsenik dalam darah",
      },
      {
        id: "res-052",
        toolId: "uvlight",
        description: "Tidak ada luka fisik mencurigakan",
      },
      {
        id: "res-053",
        toolId: "autopsy",
        description: "Kerusakan organ hati akibat racun",
      },
      {
        id: "res-054",
        toolId: "fingerprint",
        description: "Sidik jari korban saja yang ditemukan",
      },
      {
        id: "res-055",
        toolId: "toxicology",
        description: "Arsenik terdeteksi dalam tubuh",
      },
      {
        id: "res-056",
        toolId: "dna",
        description: "Tidak ditemukan DNA asing",
      },
    ],
    correctCauses: ["Keracunan makanan/minuman"],
  },
  {
    id: "case-009",
    title: "Korban ditemukan di rumah yang terbakar",
    results: [
      { id: "res-057", toolId: "xray", description: "Tidak ada patah tulang" },
      {
        id: "res-058",
        toolId: "bloodtest",
        description: "Kadar karbon monoksida tinggi",
      },
      {
        id: "res-059",
        toolId: "uvlight",
        description: "Luka bakar parah di sekujur tubuh",
      },
      {
        id: "res-060",
        toolId: "autopsy",
        description: "Kerusakan organ akibat kekurangan oksigen",
      },
      {
        id: "res-061",
        toolId: "fingerprint",
        description: "Tidak ada sidik jari asing",
      },
      {
        id: "res-062",
        toolId: "toxicology",
        description: "Karbon monoksida terdeteksi dalam darah",
      },
      {
        id: "res-063",
        toolId: "dna",
        description: "Tidak ditemukan DNA asing",
      },
    ],
    correctCauses: ["Luka bakar", "Kekurangan oksigen (asfiksia)"],
  },
  {
    id: "case-010",
    title: "Korban ditemukan di hutan",
    results: [
      {
        id: "res-064",
        toolId: "xray",
        description: "Tulang leher terputus total",
      },
      {
        id: "res-065",
        toolId: "bloodtest",
        description: "Tidak ada racun terdeteksi",
      },
      {
        id: "res-066",
        toolId: "uvlight",
        description: "Bekas darah mengering di sekitar leher",
      },
      {
        id: "res-067",
        toolId: "autopsy",
        description: "Kepala terpisah dari tubuh",
      },
      {
        id: "res-068",
        toolId: "fingerprint",
        description: "Tidak ada sidik jari asing",
      },
      {
        id: "res-069",
        toolId: "toxicology",
        description: "Tidak ada zat berbahaya terdeteksi",
      },
      {
        id: "res-070",
        toolId: "dna",
        description: "Tidak ditemukan DNA asing",
      },
    ],
    correctCauses: ["Pemenggalan kepala"],
  },
];
