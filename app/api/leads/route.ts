import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const { nome, email, telefone, consentimento } = await req.json();

    if (!nome || !email || !telefone) {
      return Response.json(
        { ok: false, message: "Preencha nome, e-mail e telefone." },
        { status: 400 }
      );
    }

    if (!consentimento) {
      return Response.json(
        { ok: false, message: "Marque a caixa de consentimento." },
        { status: 400 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Página1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString("pt-BR"),
            nome,
            email,
            telefone,
            consentimento ? "Sim" : "Não",
            "LP Digos",
          ],
        ],
      },
    });

    return Response.json({ ok: true, message: "Lead salvo com sucesso." });
  } catch (error) {
    console.error("Erro ao salvar lead:", error);

    return Response.json(
      { ok: false, message: "Erro interno ao salvar lead." },
      { status: 500 }
    );
  }
}