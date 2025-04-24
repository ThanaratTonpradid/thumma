import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-6xl">🪷</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-amber-900">
            เกี่ยวกับเรา
          </h1>
          <p className="text-xl text-amber-800 mb-8">
            ธรรมะสวัสดี คือแหล่งรวมธรรมะออนไลน์เพื่อการพัฒนาจิตใจ
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white/50 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-12 text-amber-900">
              วิสัยทัศน์และพันธกิจ
            </h2>
            <div className="space-y-8">
              <Card className="bg-white/80 border-amber-100">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-900">วิสัยทัศน์</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-800">
                    เป็นศูนย์กลางการเผยแผ่ธรรมะออนไลน์ที่ทันสมัย เข้าถึงได้ง่าย และเป็นประโยชน์ต่อการพัฒนาจิตใจของทุกคน
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 border-amber-100">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-900">พันธกิจ</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-amber-800">
                    <li>เผยแผ่ธรรมะผ่านช่องทางออนไลน์ที่ทันสมัย</li>
                    <li>สร้างชุมชนแห่งการเรียนรู้และปฏิบัติธรรม</li>
                    <li>พัฒนาสื่อธรรมะให้เข้าถึงได้ง่ายและเข้าใจง่าย</li>
                    <li>ส่งเสริมการนำธรรมะไปใช้ในชีวิตประจำวัน</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12 text-amber-900">
            ทีมงานของเรา
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/80 border-amber-100 text-center">
              <CardHeader>
                <div className="text-4xl mb-4">👨‍🦲</div>
                <CardTitle className="text-xl text-amber-900">พระอาจารย์</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-800">ผู้ให้คำแนะนำทางธรรม</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 border-amber-100 text-center">
              <CardHeader>
                <div className="text-4xl mb-4">👨‍💻</div>
                <CardTitle className="text-xl text-amber-900">ทีมพัฒนา</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-800">ผู้สร้างและดูแลระบบ</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 border-amber-100 text-center">
              <CardHeader>
                <div className="text-4xl mb-4">📝</div>
                <CardTitle className="text-xl text-amber-900">ทีมเนื้อหา</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-800">ผู้จัดทำและเรียบเรียงเนื้อหา</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
} 