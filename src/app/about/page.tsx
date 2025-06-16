// app/about-this-project/page.tsx (Next.js App Router)
export default function AboutThisProject() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
            <h1 className="text-4xl font-bold text-blue-700 mb-12">Healthcare App – Case Study</h1>

            {/* Author Introduction */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">👋 Tentang Saya</h2>
                <div className="space-y-4 text-lg leading-relaxed">
                    <p>
                        Hai! Saya adalah seorang <span className="font-medium text-blue-700">Frontend Engineer</span> yang tertarik pada pengembangan aplikasi yang human-centered, terutama di bidang kesehatan.
                        Project ini saya kerjakan sebagai bagian dari eksplorasi teknologi dan juga untuk keperluan identifikasi oleh tim <span className="font-medium">Apple Developer Academy</span>.
                    </p>
                    <p>
                        Fokus utama saya adalah membuat antarmuka yang intuitif, mudah digunakan, dan tetap menjaga performa aplikasi. Saya percaya bahwa teknologi bisa jadi jembatan untuk solusi nyata—dan itu yang coba saya terapkan di sini.
                    </p>
                </div>
            </section>


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
                    <p>
                        Salah satu fitur yang sedang dikembangkan adalah <span className="font-medium text-blue-700">product market</span>,
                        tempat pengguna bisa mencari dan membeli obat-obatan atau produk medis lainnya langsung dari aplikasi. Saat ini
                        masih menggunakan data dummy, tapi ke depannya akan diintegrasikan dengan penyedia resmi agar lebih fungsional dan terpercaya.
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
            <section id="progress-challenges" className="mb-12">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">🚧 Progress & Tantangan</h2>

                {/* Catatan deadline & fokus pengembangan */}
                <p className="text-lg leading-relaxed">
                    Fitur login menggunakan Google OAuth sudah berhasil diimplementasikan dan berjalan lancar. Namun, autentikasi email & password via NextAuth dengan Firebase masih menghadapi kendala integrasi, terutama di proses validasi kredensial. Saat ini, masih dalam tahap debugging untuk memperbaiki masalah tersebut.
                    <br /><br />

                    {/* Fokus pengembangan menjelang deadline */}
                    Karena deadline sudah dekat, pengembangan tetap dilanjutkan dengan fokus pada dokumentasi dan fitur lain yang sudah stabil, sambil terus memperbaiki login email/password di iterasi berikutnya.
                </p>
            </section>


            {/* What's Next */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">✨ What's Next</h2>
                <ul className="list-disc list-inside space-y-1 text-lg">
                    <li>Fix login (penyesuaian credential provider dengan Firebase Auth)</li>
                    <li>Tambah fitur pengingat minum obat & catatan medis</li>
                    <li>Integrasi awal fitur <span className="font-medium text-blue-700">product market</span> untuk pencarian & pembelian obat/alat kesehatan (saat ini masih menggunakan data dummy)</li>
                </ul>
            </section>


            <p>
                Hai! Saya <span className="font-medium text-blue-700">Rayzan Muhammad R</span>, seorang Frontend Engineer...
            </p>
            <p>
                GitHub: <a href="https://github.com/Zan-Mhmmdr" className="text-blue-600 underline">github.com/Zan-Mhmmdr</a>
            </p>


            {/* Credits */}
            <section className="mt-16 border-t pt-6 text-sm text-gray-500 text-center">
                <p>Frontend Engineer: <span className="font-medium text-gray-700">Rayzan Muhammad R</span></p>

            </section>

        </main>


    );
}
