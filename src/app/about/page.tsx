// app/about-this-project/page.tsx (Next.js App Router)
export default function AboutThisProject() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
            <h1 className="text-4xl font-bold text-blue-700 mb-6">Healthcare App – Case Study</h1>

            {/* Problem & Motivation */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">🔍 Problem & Motivation</h2>
                <div className="space-y-4 text-lg leading-relaxed">
                    <p>
                        Project ini berangkat dari hal yang cukup sederhana tapi sering terjadi di sekitar—banyak orang masih kesulitan
                        mengelola hal-hal penting soal kesehatan pribadi. Mulai dari jadwal minum obat, kapan harus kontrol ke dokter,
                        sampai di mana menyimpan hasil lab atau resep. Hal-hal ini kelihatan sepele, tapi dampaknya besar, apalagi kalau
                        berkaitan dengan kondisi kronis.
                    </p>
                    <p>
                        Dari situ muncul ide untuk bikin aplikasi yang bisa bantu nyederhanakan semua itu. Tujuannya bukan bikin sesuatu
                        yang kompleks, tapi justru simpel dan gampang dipakai sehari-hari. Idealnya, aplikasi ini cocok buat siapa aja:
                        orang tua, mahasiswa, atau siapa pun yang ingin lebih teratur soal kesehatan mereka.
                    </p>
                    <p>
                        Selain itu, project ini juga jadi ajang eksplorasi—gimana caranya menggabungkan teknologi dengan empati. Bukan cuma
                        sekadar bikin app, tapi juga memahami masalahnya dan mencoba menawarkan solusi yang relevan.
                    </p>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">🛠️ Tech Stack</h2>
                <ul className="list-disc list-inside space-y-1 text-lg">
                    <li><span className="font-medium text-gray-900">Next.js</span> – SSR & routing</li>
                    <li><span className="font-medium text-gray-900">TypeScript</span> – type safety</li>
                    <li><span className="font-medium text-gray-900">Firebase</span> – backend & authentication</li>
                    <li><span className="font-medium text-gray-900">NextAuth.js</span> – login & session management</li>
                    <li><span className="font-medium text-gray-900">Tailwind CSS</span> – styling utility-first</li>
                </ul>
            </section>

            {/* Progress & Challenges */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">🚧 Progress & Tantangan</h2>
                <p className="text-lg leading-relaxed">
                    Autentikasi awalnya berjalan, tapi saat ini login belum berhasil karena ada kendala integrasi antara NextAuth dan
                    Firebase Auth. Masih dalam proses debugging. Karena deadline sudah dekat, project tetap dilanjut ke tahap dokumentasi
                    dan presentasi sembari memperbaiki bagian login.
                </p>
            </section>

            {/* What's Next */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">✨ What's Next</h2>
                <ul className="list-disc list-inside space-y-1 text-lg">
                    <li>Fix login (penyesuaian credential provider dengan Firebase Auth)</li>
                    <li>Tambah fitur pengingat minum obat & catatan medis</li>
                    <li>Deploy ke Vercel</li>
                </ul>
            </section>
        </main>
    );
}
