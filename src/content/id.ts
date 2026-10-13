import type { ContentDictionary } from './types'

/**
 * Indonesian content. Must mirror the shape of `src/content/en.ts`.
 */
export const id: ContentDictionary = {
  siteName: 'SERONZ',
  identity: 'SERONZ / REKAYASA SISTEM',
  tagline: 'Saya mengerjakan sistem di balik perangkat lunak.',
  hero: {
    headline: 'Saya mengerjakan sistem di balik perangkat lunak.',
    lede: 'Platform engineering, reliabilitas, Linux, jaringan, dan alat untuk memahami bagaimana sistem berperilaku saat ada masalah.',
  },
  approach: {
    heading: 'Cara saya memandang sistem',
    body: [
      'Saya lebih peduli pada mode kegagalan daripada daftar fitur. Ketika melihat sebuah sistem, saya berusaha memahami apa yang terjadi saat beban tinggi, saat gangguan sebagian, dan saat dependensi melambat — bukan mati total.',
      'Biasanya itu berarti eksperimen kecil yang bisa direproduksi: timeout, retry, backpressure, serta perilaku sistem operasi dan jaringan di bawahnya. Tujuannya adalah kejelasan operasional — mengetahui apa yang akan dilakukan sebuah sistem sebelum mengejutkan Anda di produksi.',
    ],
  },
  focusAreas: [
    'Platform Engineering',
    'Site Reliability Engineering',
    'Linux & Jaringan',
    'Kubernetes',
    'Go',
    'Reliabilitas Infrastruktur & Respon Insiden',
  ],
  // TODO(owner): isi hanya dengan pengalaman yang terverifikasi dan tidak rahasia.
  experience: [
    {
      role: 'Peran contoh (placeholder)',
      context: 'Konteks contoh',
      period: 'Tahun – Tahun',
      summary:
        'Entri ini sengaja dikosongkan. Tambahkan hanya peran, tanggal, dan hasil yang terverifikasi serta tidak bersifat rahasia di sini.',
    },
  ],
  nav: [
    { label: 'Proyek', to: '/projects' },
    { label: 'Catatan', to: '/notes' },
    { label: 'Tentang', to: '/about' },
  ],
  projects: [
    {
      slug: 'reliability-lab',
      name: 'Reliability Lab',
      summary:
        'Eksplorasi berbasis Go tentang bagaimana klien berperilaku ketika dependensi bermasalah.',
      problem:
        'Penanganan timeout, retry, dan rate limit sering disalin antar layanan tanpa diuji terhadap perilaku kegagalan yang sebenarnya. Sulit menalar apa yang benar-benar akan dilakukan klien ketika dependensi melambat, bukan mati.',
      approach:
        'Eksperimen Go kecil dan terisolasi yang mencakup timeout, pembatalan context, retry terbatas dengan jitter, penanganan HTTP 429, dan batas konkurensi, dengan pengujian yang sengaja memicu jalur kegagalan.',
      status: 'planned',
      technologies: ['Go'],
      links: [],
    },
    {
      slug: 'linux-networking-lab',
      name: 'Linux Networking Lab',
      summary:
        'Eksperimen jaringan Linux yang bisa direproduksi untuk routing, firewall, dan troubleshooting level paket.',
      problem:
        'Masalah jaringan sulit direproduksi dan dinalar tanpa lingkungan yang terisolasi dan dapat diulang. Debugging sekadarnya jarang meninggalkan sesuatu yang bisa dipelajari.',
      approach:
        'Eksperimen yang bisa direproduksi memakai network namespace, tabel routing, aturan firewall, dan packet capture, masing-masing didokumentasikan dengan apa yang harus diamati dan cara melakukan troubleshooting.',
      status: 'planned',
      technologies: ['Linux', 'netns', 'nftables'],
      links: [],
    },
    {
      slug: 'certificate-monitor',
      name: 'Certificate Monitor',
      summary:
        'Eksplorasi pemantauan certificate transparency untuk melacak sertifikat yang diterbitkan.',
      problem:
        'Log certificate transparency sangat berisik dan sulit diikuti untuk sekumpulan nama tertentu, sehingga penerbitan yang tak terduga mudah terlewat.',
      approach:
        'Alat kecil untuk memantau aliran certificate transparency dan menampilkan penerbitan untuk nama yang dikonfigurasi. Belum layak dipublikasikan sampai kode dan datanya dipastikan bebas dari materi rahasia perusahaan, kredensial, atau informasi internal yang tidak sah.',
      status: 'planned',
      technologies: [],
      links: [],
    },
  ],
  notes: [
    {
      slug: 'linux-networking-fundamentals',
      title: 'Jaringan Linux, dari interface ke atas',
      summary:
        'Catatan tentang interface, rute, dan bagaimana paket benar-benar keluar dari host.',
      tags: ['Linux', 'jaringan'],
      status: 'planned',
      date: '',
    },
    {
      slug: 'kubernetes-rbac',
      title: 'Membaca RBAC Kubernetes tanpa menebak',
      summary: 'Jalur praktis memahami role, binding, dan izin service account.',
      tags: ['Kubernetes', 'RBAC'],
      status: 'planned',
      date: '',
    },
    {
      slug: 'go-concurrency-failure-paths',
      title: 'Konkurensi Go dan jalur kegagalan',
      summary: 'Pembatalan context, errgroup, dan bagian tepi yang sering dilewatkan.',
      tags: ['Go', 'konkurensi'],
      status: 'planned',
      date: '',
    },
    {
      slug: 'reliability-patterns',
      title: 'Pola reliabilitas yang layak dipahami',
      summary: 'Timeout, retry dengan jitter, hedged request, dan backpressure.',
      tags: ['reliabilitas'],
      status: 'planned',
      date: '',
    },
  ],
  ui: {
    skipToContent: 'Lewati ke konten',
    navLabel: 'Navigasi utama',
    openMenu: 'Buka menu navigasi',
    closeMenu: 'Tutup menu navigasi',
    languageGroupLabel: 'Bahasa',
    focusAreas: 'Bidang fokus',
    technologies: 'Teknologi',
    tags: 'Tag',
    problem: 'Masalah',
    approach: 'Pendekatan',
    status: {
      planned: 'Direncanakan',
      'in-progress': 'Sedang dikerjakan',
      completed: 'Selesai',
    },
    noteStatus: {
      planned: 'Direncanakan',
      draft: 'Draf',
      published: 'Terbit',
    },
    pendingRepo: 'Belum ada repositori atau tulisan publik.',
    viewProjects: 'Lihat proyek',
    aboutMe: 'Tentang saya',
    allProjects: 'Semua proyek',
    allNotes: 'Semua catatan',
    moreAbout: 'Latar belakang selengkapnya',
    approachEyebrow: 'pendekatan',
    selectedWorkEyebrow: 'karya pilihan',
    writingEyebrow: 'tulisan',
    backgroundEyebrow: 'latar belakang',
    contactEyebrow: 'kontak',
    contactTitle: 'Hubungi saya',
    contactFallback:
      'Tautan kontak publik dikonfigurasi saat build dan belum diatur untuk deployment ini.',
    noContact: 'Belum ada tautan kontak publik yang dikonfigurasi untuk deployment ini.',
    footerNote: 'Situs statis — tanpa pelacak, tanpa backend.',
    selectedProjects: {
      title: 'Proyek pilihan',
      description:
        'Sedikit eksplorasi rekayasa. Status ditampilkan apa adanya — sebagian besar masih direncanakan.',
    },
    notesSection: {
      title: 'Catatan rekayasa',
      description: 'Tulisan tentang Linux, Kubernetes, Go, dan kerja reliabilitas.',
    },
    experienceSection: {
      title: 'Pengalaman',
    },
    projectsPage: {
      eyebrow: 'proyek',
      title: 'Proyek rekayasa',
      lede: 'Tulisan bergaya studi kasus tentang sistem yang saya eksplorasi. Sebuah proyek baru ditandai selesai setelah diimplementasikan dan diuji.',
      sectionTitle: 'Semua proyek',
      notice:
        'Halaman detail per proyek masih direncanakan. Rute ini dan kartu di atas mendeskripsikan tiap proyek secara jujur; tulisan yang lebih dalam akan ditambahkan pada perubahan berikutnya.',
    },
    notesPage: {
      eyebrow: 'catatan',
      title: 'Catatan rekayasa',
      lede: 'Tulisan teknis tentang jaringan Linux, Kubernetes, konkurensi Go, dan pola reliabilitas. Ini topik yang sedang dikerjakan, bukan artikel yang sudah terbit.',
      sectionTitle: 'Indeks',
      notice:
        'Halaman per catatan masih direncanakan. Tidak ada yang ditandai terbit sampai benar-benar ditulis.',
    },
    aboutPage: {
      eyebrow: 'tentang',
      title: 'Sistem, reliabilitas, dan mode kegagalan',
      lede: 'Saya seorang systems dan platform engineer yang berfokus pada bagaimana perangkat lunak berperilaku di dunia nyata — saat beban tinggi, saat gangguan sebagian, dan saat dependensi menurun.',
      focusTitle: 'Bidang fokus',
      contactTitle: 'Kontak',
      contactDescription:
        'Tautan kontak publik diberikan saat build dan tidak pernah di-commit ke repositori.',
    },
    notFound: {
      code: 'exit status 1 / 404',
      title: 'Path tidak ditemukan',
      body: 'Tidak ada apa pun di alamat ini. Mungkin sudah dipindahkan, atau memang tidak pernah ada.',
      link: 'Kembali ke beranda',
    },
  },
}
