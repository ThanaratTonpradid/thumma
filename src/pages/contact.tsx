import { Button } from "@/components/ui/button"
import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-6xl">🪷</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-amber-900">
            ติดต่อเรา
          </h1>
          <p className="text-xl text-amber-800 mb-8">
            เรายินดีรับฟังความคิดเห็นและคำแนะนำจากทุกท่าน
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white/50 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/80 border-amber-100">
              <CardHeader>
                <CardTitle className="text-xl text-amber-900">ส่งข้อความถึงเรา</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-1">
                      ชื่อ-นามสกุล
                    </label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="กรุณากรอกชื่อ-นามสกุล"
                      className="border-amber-200 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-1">
                      อีเมล
                    </label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="กรุณากรอกอีเมล"
                      className="border-amber-200 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-amber-900 mb-1">
                      หัวข้อ
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      placeholder="กรุณากรอกหัวข้อ"
                      className="border-amber-200 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-amber-900 mb-1">
                      ข้อความ
                    </label>
                    <Textarea
                      id="message"
                      placeholder="กรุณากรอกข้อความ"
                      className="border-amber-200 focus:ring-amber-500"
                    />
                  </div>
                  <div className="text-center">
                    <Button type="submit" className="px-8 bg-amber-700 hover:bg-amber-800 text-white">
                      ส่งข้อความ
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-12 text-amber-900">
              ช่องทางการติดต่อ
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/80 border-amber-100 text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">📧</div>
                  <CardTitle className="text-xl text-amber-900">อีเมล</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-800">contact@dharmasawasdee.com</p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 border-amber-100 text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">📱</div>
                  <CardTitle className="text-xl text-amber-900">โทรศัพท์</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-800">02-XXX-XXXX</p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 border-amber-100 text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">📍</div>
                  <CardTitle className="text-xl text-amber-900">ที่อยู่</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-800">กรุงเทพมหานคร, ประเทศไทย</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 