# Oxido AI Article Formatter

## Opis projektu

Aplikacja wczytuje treść artykułu, przetwarza ją przy użyciu API OpenAI, generując odpowiednio sformatowany kod HTML. 
Kod artykułu jest wzbogacony o odpowiednie tagi HTML, w tym obrazy z miejscem na podpisy, co pozwala na łatwe osadzenie grafiki w wygenerowanym dokumencie.

Dodatkowo, projekt zawiera dwa szablony HTML:
1. `assets/szablon.html` – pusty szablon do wklejania kodu wygenerowanego artykułu.
2. `assets/podglad.html` – plik podglądowy z pełnym kodem HTML artykułu.

## Wymagania

- Node.js
- Konto OpenAI (do wygenerowania klucza API)

## Instalacja

1. Sklonuj repozytorium:

  ```bash
  git clone https://github.com/yourusername/oxido-ai-article-formatter.git
  cd oxido-ai-article-formatter
  ```

2. Zainstaluj wymagane pakiety

  ```bash
  npm install
  ```

3. Utwórz plik .env w głównym katalogu i dodaj klucz API OpenAI:

  ```plaintext
  (przykład w pliku .env.example)
  OPENAI_API_KEY=your_openai_api_key_here
  ```

## Uruchomienie

Aby wygenerować kod HTML artykułu, uruchom poniższe polecenie:

  ```bash
  node index.js
  ```

Po zakończeniu działania program utworzy plik artykul.html z wygenerowanym kodem HTML artykułu.

### Podgląd artykułu
Otwórz assets/podglad.html w przeglądarce, aby zobaczyć pełen podgląd artykułu.
Użyj assets/szablon.html jako pustego szablonu, do którego możesz wklejać nowe wygenerowane artykuły.
