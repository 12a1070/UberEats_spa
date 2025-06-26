class CreateLineFoods < ActiveRecord::Migration[8.0]
  def change
    create_table :line_foods do |t|
      t.timestamps
    end
  end
end
